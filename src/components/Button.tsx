interface Props {
    word: string
}

const Button = ({ word }: Props ) => {
  return (
    <div>
        <button className="text-[#83C727] border px-3 py-1.5 rounded-lg shadow">
          {word}
        </button>
    </div>
  )
}

export default Button