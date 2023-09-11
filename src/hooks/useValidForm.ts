import { SubmitType, schema } from "@/types/messages";
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

export function useValidForm() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [errors, setErrors] = useState<ErrorsType>({
		name: null,
		email: null,
		message: null,
	});

	// state variables for condition of the fetch request
	const [isPending, setIsPending] = useState<boolean>(false);
	const [isResolved, setIsResolved] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const newErrorState = { ...errors, name: null };
		setErrors(newErrorState);
		setName(e.target.value);
	};

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const newErrorState = { ...errors, email: null };
		setErrors(newErrorState);
		setEmail(e.target.value);
	};
	const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		const newErrorState = { ...errors, message: null };
		setErrors(newErrorState);
		setMessage(e.target.value);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		console.log(`form submitted`);

		let submission: SubmitType = {
			name,
			email,
			message,
		};

		try {
			// begin fetch proccess
			setIsPending(true);
			setIsResolved(false);
			setIsError(false);

			// if inputs pass zod validation, we can proceed. Errors are passed to the catch
			// segment below
			const validSubmission = schema.parse(submission);

			const res = await fetch("/api/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(validSubmission),
			});

			if (!res.ok) {
				throw new Error("Something went wrong");
			}

			console.log("message sent");

			setErrors({
				name: null,
				email: null,
				message: null,
			});
			setMessage("");

			// fetch was successful
			setIsPending(false);
			setIsResolved(true);

		} catch (err) {
			// fetch was not successful
			setIsPending(false);
			setIsError(true);

			if (err instanceof ZodError) {
				let newErrors: ErrorsType = { ...errors };
				for (const issue of err.issues) {
					// as keyof is a typescript assertation, and so there is no guarantee that the 
					// path is name, email, message. Whilst there is currently no possible other option,
					// this conditional statement performs a runtime check, to catch any bugs that might
					// crop up in the future
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
		isPending,
		isResolved,
		isError
	};
}
