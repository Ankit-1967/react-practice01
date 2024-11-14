import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Banner(props) {
const [text, setText ] = useState("Enter Text Here");
  var handleOnChange = (e) => {
    setText(e.target.value);
  }
    const toCapitalize = () => {
      var capatilLatter = text[0].toUpperCase();
      var AnotheLetter = text.slice(1).toLowerCase();
      console.log(AnotheLetter)
      var jointLetter = capatilLatter + AnotheLetter
      console.log(text + "capitalize was clicked")
      setText(jointLetter);
      props.ShowAlert("You can successfully converted into Capitalized", "success")
    }
    const toLowercase = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.ShowAlert("You can successfully converted into Lowercase", "success")
    }
    const toUppercase = () => {
      let newText = text.toUpperCase();
      setText(newText);
      console.log(text + "uppercase was clicked")
      props.ShowAlert("You can successfully converted into Uppercase", "success")
    }
    const toClear = ()=>{
      setText("");
      props.ShowAlert("You can successfully clear text", "success")
    }
    var words = text.length;
    var character = text.trim().split(/\s+/).length; 
    if(words === 0){
      character = 0;
    }
  return (
    <div className={`banner-bg bg-${props.mode === "dark"?"dark":"light"} text-${props.mode === "dark"?"light":"dark"}`}>
        <div className='container'>
            <div className="pt-3 pb-3">
                <label htmlFor="boxText" className="form-label">{props.BannerHeading}</label>
                <textarea className="form-control" id="boxText" value={text} onChange={handleOnChange} rows="10"></textarea>
                <div className="d-flex gap-2 justify-content-center py-5">
                <button className="btn btn-primary d-inline-flex align-items-center" onClick = {toCapitalize} type="button">
                  Capatalize
                  <svg className="bi ms-1" width="20" height="20"><use xlinkHref="#arrow-right-short"></use></svg>
                </button>
                <button className="btn btn-outline-secondary d-inline-flex align-items-center" onClick={toLowercase} type="button">
                  Lowecase Text
                  <svg className="bi ms-1" width="20" height="20"><use xlinkHref="#arrow-right-short"></use></svg>
                </button>
                <button className="btn btn-primary d-inline-flex align-items-center" type="button" onClick={toUppercase}>
                  Uppercase Text
                  <svg className="bi ms-1" width="20" height="20"><use xlinkHref="#arrow-right-short"></use></svg>
                </button>
              <button className="btn btn-outline-secondary d-inline-flex align-items-center" onClick={toClear} type="button">
                 Reset
                  <svg className="bi ms-1" width="20" height="20"><use xlinkHref="#arrow-right-short"></use></svg>
                </button> 
              </div>
              <h4 className='text-center fs-25 fw-600 Charcounter'>{character} character & {words} words </h4>    
            </div>  
          </div>
    </div>
    
  )
}
Banner.defaultProps = {
  BannerHeading : "Enter Your view here...!!"
}
Banner.propTypes = {
  BannerHeading : PropTypes.string
}