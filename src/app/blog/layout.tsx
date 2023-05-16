export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1"></div>
            <div className="col-span-3">{children}</div>
        </div>
    );
}
