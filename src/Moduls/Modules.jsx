import btnmodule from './btn.Module.css'

const Modules = () => {
  return (
    <>
    <div>
      <button className={btnmodule.error}>Add</button>
    </div>
    <div>
      <button className={btnmodule.warning}>sub</button>
    </div>
    <div>
      <button className={btnmodule.safe}>reset</button>
    </div>
    </>
  )
}

export default Modules
