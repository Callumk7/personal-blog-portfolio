import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { ZodError, z } from "zod";

type ErrorsType = {
	name: {
		code: z.ZodIssueCode;
		message: string;
	} | null;
	email: {
		code: z.ZodIssueCode;
		message: string;
	} | null;
	message: {
		code: z.ZodIssueCode;
		message: string;
	} | null;
};

const schema = z.object({
	name: z.string().min(2).max(30),
	email: z.string().email(),
	message: z.string().min(10).max(500),
});

type SubmitType = z.infer<typeof schema>;

export function useValidForm() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [errors, setErrors] = useState<ErrorsType>({
		name: null,
		email: null,
		message: null,
	});

	const handleNameChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
		const newErrorState = {...errors, name: null};
		setErrors(newErrorState);
		setName(e.target.value);
	}

	const handleEmailChange: ChangeEventHandler<HTMLInputElement>  = (e) => {
		const newErrorState = {...errors, email: null};
		setErrors(newErrorState);
		setEmail(e.target.value);
	}
	const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement>  = (e) => {
		const newErrorState = {...errors, message: null};
		setErrors(newErrorState);
		setMessage(e.target.value);
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		console.log(`form submitted`);

		let submission: SubmitType = {
			name,
			email,
			message,
		};

		try {
			const validSubmission = schema.parse(submission);
			// if inputs pass zod validation, we can proceed
			const res = await fetch("/api/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(validSubmission),
			});

			if (res.ok) {
				console.log("message sent");

				setErrors({
					name: null,
					email: null,
					message: null,
				});
				setMessage("");
			} else {
				console.log("message not sent");
			}
		} catch (err) {
			if (err instanceof ZodError) {
				// handle zod error
				console.log("zod error");
				console.log(err.issues);
				let newErrors: ErrorsType = { ...errors };
				for (const issue of err.issues) {
					// here, we certify that the path is one of our fields, and catch any errors
					// where this is not the case (future proof)
					if (["name", "email", "message"].includes(String(issue.path[0]))) {
						newErrors[String(issue.path[0]) as keyof ErrorsType] = {
							code: issue.code,
							message: issue.message,
						};
					} else {
						throw new Error(`Unexpected issue path: ${issue.path[0]}`);
					}
				}

				console.log(newErrors);
				setErrors(newErrors);
			}
		}
	};

	return {
		handleSubmit,
		name,
		handleNameChange,
		email,
		handleEmailChange,
		message,
		handleMessageChange,
		errors,
		setErrors,
	};
}
