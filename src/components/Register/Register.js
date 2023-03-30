import React,{useEffect,useState,useRef , useContext} from 'react'
import {faCheck , faTimes , faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../api/axios'
import './register.css'
import { Context } from '../../context/ContextState'




const USER_REGEX = /([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD] ).{3,24}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


const Register = () => {
const context = useContext(Context)
const {user,setuser,password,setpassword,userValidation,setuserValidation ,showNewReg ,  setshowNewReg,setusersArray,usersArray} = context




const userRef = useRef()
const errRef = useRef()

const [newuser, setNewUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
const [userReg, setuserReg] = useState({ username:'' , pass:''})


 const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);



useEffect(() => {
  userRef.current.focus()


}, [])

  useEffect(() => {
        setValidName(USER_REGEX.test(newuser));
    }, [newuser])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [newuser, pwd, matchPwd])

// useEffect(() => {
//     console.log("usersArray")
//     if(usersArray.allUsers){
//         //   console.log(usersArray)
         
//     }


// }, [usersArray])



const handleSubmit =  (e) => {
    
e.preventDefault();
const v1 = USER_REGEX.test(newuser);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
// try{
// const response = await axios.post(REGISTER_URL , 
//     JSON.stringify({user : newuser , pwd }),
//     {
// headers : {'Content-Type' : 'application/json'},
// withCredentials : true


//     }
//     )
else{
    let user = newuser
    let password = pwd
    
let newuservar = [...usersArray.allUsers ,{...userReg,username :user , pass:password}]
setusersArray({...usersArray ,allUsers:newuservar  })

console.log(newuservar)
console.log(pwd)

    setSuccess(true)}
// } catch(err){

// if(!err?.response){
//     setErrMsg('No Server Response')
// }else if(err.response?.status === 409){
//     setErrMsg('الاسم مستخدم');
// }else {
//     setErrMsg('فشل التسجيل')
// }
// errRef.current.focus()

// }

}

useEffect(() => {
     if(usersArray.allUsers){
   const jsonArr =JSON.stringify(usersArray)
          localStorage.setItem("UsersDetails",jsonArr)
}
   
}, [usersArray])


  return (
<div className='new-reg'>
  {success ? (
                <section className='d-flex align-items-center justify content-center'>
                    <h1>تم إنشاء الحساب بنجاح</h1>
                    
                        <p onClick={() => setshowNewReg(false)}>تسجيل دخول</p>
                    
                </section>
            ) : (




    <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
<h1>إنشاء حساب</h1>
<form onSubmit={handleSubmit}>
<label htmlFor='username'>
الاسم:
 <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !newuser ? "hide" : "invalid"} />
</label>
<input 
type='text'
id='username'
ref={userRef}
autoComplete="off"
onChange={(e) => setNewUser(e.target.value)}
required
aria-invalid={validName ? "false" : "true"}
aria-describedby = "uidnote"
onFocus={() => setUserFocus(true)}
onBlur={() => setUserFocus(false)}
/>
  <p id="uidnote" className={userFocus && newuser && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} className="ms-2" />
                        4 إلى 24 حرف باللغة العربية<br />
                            يمكن أن يحتوي على حروف ، أو أرقام ،  أو علامة _<br />    
                        </p>

<label htmlFor="password">
                            الرقم السري:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}

                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className='ms-2' icon={faInfoCircle} />
                            8 إلى 24 رمز باللغة الانجليزية .<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed Special character: <span aria-label="exclamiation mark">!</span> <span aria-label="at sympol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percentage">%</span>
                        </p>




<label htmlFor="confirm_pwd">
                            تأكيد الرقم السري:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon className='ms-2' icon={faInfoCircle} />
                            يجب أن يطابق الرقم السري المكتوب فالقسم السابق
                        </p>
 <button disabled={!validName || !validPwd || !validMatch ? true : false}>إنشاء حساب جديد</button>







</form>

 <p>
                        مسجل بالفعل ؟<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#" onClick={() => setshowNewReg(false)}>تسجيل الدخول</a>
                        </span>
                    </p>
                    </section>
            )}
</div>

  )
}

export default Register