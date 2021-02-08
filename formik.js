import React from 'react'
import * as Yup from "yup";
import { Formik,Form,Field,ErrorMessage } from "formik";
import Errormsg from "./errormsg";

function Formikk() {

    const validationSchema = Yup.object({
        email: Yup.string().required("required !"),
        pass: Yup.string().required("required !"),
        // name:Yup.object({
        //     first:Yup.string().required("required"),
        //     second:Yup.string().required("required")
        // }),
        gender:Yup.string().required("required !"),
        radioOption:Yup.string().required("required !"),
        checkBoxOption:Yup.array().required("required"),
    })

    const initialValues = {
        email: "",
        pass: "",
        // name:{
        //     first:"",
        //     second:""
        // },
        // comments:"",
        gender:"",
        radioOption:"",
        checkBoxOption:[]
    }
    const onSubmit = (values,onSubmitProps)=>{
        console.log(values);
        onSubmitProps.resetForm()
    }

    //specific validation to a field
    // const commentValidate = (value)=>{
    //     let error;
       
    //     if(!value)
    //     {
    //         error = "required !"
    //     }
    //     return error;
    // }

    //label for select
    const options = [
        {key : "select an option",value:""},
        {key:"1",value:"one"},
        { key: "2", value: "two" },
        { key: "3", value: "three" },
        { key: "4", value: "four" },
    ]
    const radioOptions = [
        { key: "1", value: "one" },
        { key: "2", value: "two" },
        { key: "3", value: "three" },
        { key: "4", value: "four" }
    ]
    const checkOptions = [
        { key: "1", value: "one" },
        { key: "2", value: "two" },
        { key: "3", value: "three" },
        { key: "4", value: "four" }
    ]


 
    // console.log(formik.values);
    return (
        <Formik
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
        initialValues = {initialValues}
        // validateOnChange = {false}
        // validateOnBlur = {false}
        >
            <Form >
                <label>Email:</label><br />
                <Field type="text" name="email" placeholder="email"/><br />
                <ErrorMessage name = "email" component = {Errormsg}/>

                <label>Password:</label><br />
                <Field type="text" name="pass" placeholder="Password"/><br />
                <ErrorMessage name="pass" component={Errormsg}/>

                {/* <label>name</label><br/>
                <Field type = "text" placeholder = "first name"  name = "name.first" /><br/>
                <ErrorMessage name="name.first" component={Errormsg} />
                <Field type = "text" placeholder = "last name" name = "name.second" /><br/>
                <ErrorMessage name="name.second" component={Errormsg} />

                <label htmlFor = "comments">Comments</label><br/>
                <Field type = "text" name = "comments" validate = {commentValidate} />
                <br/>
                <ErrorMessage name="comments" component={Errormsg}/><br/> */}

                <label>Gender</label>
                <Field as = "select" name = "gender" >
                    {
                        options.map(option=>{
                            return(
                                <option key = {option.key} value = {option.value}> {option.key} </option>
                            )
                        })
                    }
                    </Field><br/>
                    <ErrorMessage name ="gender" component = {Errormsg}/>

                  

                <label>Radio Button</label><br/>
                <Field name = "radioOption">
                    {
                        ({field})=>{
                            console.log(field)
                           return radioOptions.map(option=>{
                                 return (
                                     <React.Fragment key = {option.key}>
                                         <input 
                                         type = "radio"
                                         id = {option.value}
                                         {...field}
                                         value = {option.value}
                                         checked = {field.value === option.value}
                                         />
                                         <label htmlFor={option.value} >{option.key}</label>
                                     </React.Fragment>
                                 )
                            })
                        }
                    }
                </Field><br/>
                <ErrorMessage name="radioOption" component={Errormsg} />

                <label>checkBoxOption</label><br />
                <Field name="checkBoxOption">
                    {
                        ({ field }) => {
                            console.log(field)
                            return radioOptions.map(option => {
                                return (
                                    <React.Fragment key={option.key}>
                                        <input
                                            type="checkbox"
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                            checked={field.value.includes(option.value)}
                                        />
                                        <label htmlFor={option.value} >{option.key}</label>
                                    </React.Fragment>
                                )
                            })
                        }
                    }
                </Field><br />
                <ErrorMessage name="checkBoxOption" component={Errormsg} />

                <button type="submit">submit</button>
               
            </Form>

        </Formik>
    )
}

export default Formikk
