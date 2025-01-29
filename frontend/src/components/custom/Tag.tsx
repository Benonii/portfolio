function Tag({ text }: { text: string}) {
  return (
    <p className="text-xs rounded-lg p-1 text-gray60 border border-gray60 font-mono">
      {text}
    </p>
  )
}

export default Tag
