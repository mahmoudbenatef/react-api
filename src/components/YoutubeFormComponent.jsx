import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as yup from 'yup';
import TextError from "./TextError.jsx" 
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 let validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email('enter valid email ya fla7').required(),
    comment:yup.string().required(),
    address:yup.string().required(),
    phNumbers: yup.array()
    .of(yup.string().required("This phone number is required"))

  });

    let   initialValues= {
        firstName: '',
        lastName: '',
        email: '',
        comment:'',
        address:'',
        social:{
          facebook:'',
          twitter:''
        },
        phoneNumbers:['',''],
        phNumbers:['']
      }
      let onSubmit= values => {
        alert(JSON.stringify(values, null, 2));
      }
    export default function YoutubeFormComponent  () {
   return (
     <div className="container">

       <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
       validateOnChange={false}
       >
     <Form  >
       <div className="form-group">

       <label className="form-label" htmlFor="firstName">First Name</label>
       <Field
         id="firstName"
         name="firstName"
         type="text"
         className="form-control"
       />
       <ErrorMessage name ="firstName" component={TextError} />
       </div>
     <br />
     <div className="form-group">

       <label className="form-label" htmlFor="lastName">Last Name</label>
       <Field
         id="lastName"
         name="lastName"
         type="text"
         className="form-control"
       />
              <ErrorMessage name ="lastName" >
                {
                  errorMsg => <TextError> {errorMsg}</TextError>
                }
              </ErrorMessage>
</div>
     <br />
     <div className="form-group">
       <label className="form-label" htmlFor="email">Email Address</label>
       <Field
         id="email"
         name="email"
         type="email"
         className="form-control"
       />
       <ErrorMessage name ="email" component={TextError} />

</div>
       <br />
       <div className="form-group">

        <label className="form-label" htmlFor="comment">Comment</label>
       <Field
         id="comment"
         name="comment"
         type="text"
         as="textarea"
         className="form-control"
       />
       <ErrorMessage name ="comment" component={TextError} />
</div>
    <br />
    <div className="form-group">

    <label className="form-label" htmlFor="address">Address</label>
    <Field name="address">
      {
        ({field, meta})=>{
          // console.log(meta);
          return (
          <>
          <input type="text" id="address" {...field}
          className="form-control"
           />
          {meta.touched && meta.error?
        <TextError>{meta.error}</TextError> 
        : null         
        }
          </>)
        }
      }
    </Field>

</div>
<br />
<div className="form-group">

       <label className="form-label" htmlFor="twitter">Twitter</label>
       <Field
         id="twitter"
         name="social.twitter"
         type="text"
         className="form-control"
       />
       {/* <ErrorMessage name ="firstName" component={TextError} /> */}
       </div>

       <div className="form-group">

       <label className="form-label" htmlFor="facebook">Facebook</label>
       <Field
         id="facebook"
         name="social.facebook"
         type="text"
         className="form-control"
       />
       {/* <ErrorMessage name ="firstName" component={TextError} /> */}
       </div>

       <div className="form-group">

       <label className="form-label" htmlFor="primaryPhoneNumber">Primary Phone Number</label>
       <Field
         id="primaryPhoneNumber"
         name="phoneNumbers[0]"
         type="text"
         className="form-control"
       />
       {/* <ErrorMessage name ="firstName" component={TextError} /> */}
       </div>

       <div className="form-group">

       <label className="form-label" htmlFor="secondaryPhoneNumber">Secondary phone number</label>
       <Field
         id="secondaryPhoneNumber"
         name="phoneNumbers[1]"
         type="text"
         className="form-control"
       />
       {/* <ErrorMessage name ="firstName" component={TextError} /> */}
       </div>
<br />
       <div className="form-group">

       <label className="form-label" htmlFor="secondaryPhoneNumber">PhNumbers</label>
       <FieldArray name="phNumbers">
         {
           ({push,remove,form:{values:{phNumbers}},...props})=>{
            //  console.log(phNumbers,props);
            //  push(5)
             
          return  phNumbers.map((number,index)=>
               (
              <div key={index}>

              <Field   className={""} name={`phNumbers[${index}]`}/>

              {
                phNumbers.length>1?
                <div className={"btn btn-danger m-2"} onClick={()=>remove(index)}>{' ' }-{' ' }</div> :
                null
              
              }
              {
                index === phNumbers.length-1 ?
                <div className={"btn btn-danger m-2"} onClick={ ()=>  push('') }>{' '}+{' ' }</div> :
                null
              }
                     <ErrorMessage name={`phNumbers[${index}]`} component={TextError} />

              </div>
              )
            )
           }
         }
       </FieldArray>
       </div>

<div className="form-group d-flex justify-content-center">

       <button type="submit" className={"btn btn-primary "}>Submit</button>
</div>
<br />
     </Form>
     </Formik>
     </div>

   );
 };