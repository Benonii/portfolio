function Tag({ text }: { text: string}) {
  return (
    <p className="p-2 text-gray60 border border-gray60">
      {text}
    </p>
  )
}

export default Tag
