export default function Page({params}: {params: {id: string}}) {
    return <div className="text-3xl text-primary">This page id: {params.id}</div>
}
