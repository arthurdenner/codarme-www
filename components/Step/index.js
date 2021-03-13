export const Step = ({date, text, disable = false}) => (
  <div className={`flex cursor-${disable ? 'not-allowed' : 'pointer'} items-center mb-4`}>
    <div className={`text-${disable ? 'disable' : 'white'} text-center`}>
        <p>{date}</p>
        <p className="font-bold">{text}</p>
    </div>
    <div className={`line ${!disable ? 'active' : ''}`} disable={disable} />
  </div>
)