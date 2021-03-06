import react, { useState } from "react"
import { IntlProvider } from "react-intl";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import Layout from "../Layout";
import "./style/CreateProject.scss"
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const addProjecturl = "http://localhost:3001/project/add-Project/";
const messages:any =  require('../messages.js').default;

interface layoutFn{
    langfunc:any
}
interface Participant{
    label : String,
    value:number
}
interface project{
    name:String,
    owner:String,
    finishDate:String,
    startDate:String,
    text:String,
    particapent : Array<Participant>,
    
}

const participant= [{label:"saleem",value:1},{label:'nadya',value:2},{label:"rami",value:3},{label:'fadi',value:4}]

function CreateProject(props:layoutFn)
{
    const navigate = useNavigate();
    const [Userinput,setInput] = useState({name:"",
    owner:"",
    finishDate:"",
    startDate:"",
    text:"",
    particapent : [],
    });
    const [selected, setSelected] = useState([]);
    const [locale, setLocale] = useState('en');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        Userinput["particapent"] = selected;
        Userinput["startDate"] = new Date().toDateString();
        Userinput["owner"] = "1";
        addProject(Userinput);
        alert("added succefully")
        navigate("/dashboard/projects")
    }
    function addProject(prop:project) {
        return new Promise((resolve, reject) => {
          axios.post(addProjecturl, { name:prop.name,owner:prop.owner,finishDate:prop.finishDate,
            startDate:prop.startDate,text:prop.text,
            particapent:prop.particapent}).then((res: unknown) => {
            resolve(res)
          })
          .catch((err: any) => reject(err))})
        }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let tempInput = {...Userinput};
        let property = String(event.target.name);
        if( property == "owner" || property =="finishDate" || property =="text" || property == "name" )
        {
            
                    tempInput[property] = event.target.value
                    console.log(tempInput)
                    setInput(tempInput)
        }
    }
    function TextAreaHandle(event: react.ChangeEvent<HTMLTextAreaElement>)
    {
        Userinput["text"] = event.target.value;
    }
  
    
    return(
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        <div className="signuparea">
        <form onSubmit={handleSubmit}>
            <div id="page-LogIn-form">
                <main>
                    <fieldset>
                        <legend>Create Project</legend>

                        <Input name="name" label="complete name" onChange={handleChange}required/>
                        <Input type="date" name="finishDate" label="finishDate" onChange={handleChange} required/>
                    </fieldset>
                    <Textarea label="Description" name="text" onChange={TextAreaHandle}> </Textarea>
                    <fieldset>
                        <legend>participant </legend>

                          <pre>{selected.map((todo:any, index) =>
                            <h6 key={index}>
                                {todo.label}
                            </h6>
                                )}</pre>
                        <MultiSelect
                            options={participant}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                        />
                    </fieldset>
                    <footer>
                        
                        <button type="submit"> create</button>
                        creating your project

                    </footer>
                </main>
            </div>
        </form>
        </div>
        </IntlProvider>
    
    )
}
export default CreateProject;