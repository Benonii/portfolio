function Tag({ text }: { text: string}) {
  return (
    <p className="text-xs rounded-lg p-1 text-gray60 dark:text-gray30 border border-gray60 dark:border-gray30 font-mono">
      {text}
    </p>
  )
}

export default Tag
