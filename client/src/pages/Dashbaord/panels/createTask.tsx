import react, { useState } from "react"
import { IntlProvider } from "react-intl";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import Layout from "../Layout";
import "./style/CreateTask.scss"
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const addtaskurl = "http://localhost:3001/task/add-task/";
const messages:any =  require('../messages.js').default;

interface layoutFn{
    langfunc:any
}
interface Participant{
    label : String,
    value:number
}
interface task{
    name:String,
    projectId:String,
    finishDate:String,
    text:String,
    particapent : Array<Participant>,
    
}

const participant= [{label:"saleem",value:1},{label:'nadya',value:2},{label:"rami",value:3},{label:'fadi',value:4}]
const projects= [{label:"proejct1",value:"1"},{label:'proejct2',value:"2"},{label:"proejct3",value:"3"},{label:'proejct4',value:"4"}]


function Createtask(props:layoutFn)
{
    const navigate = useNavigate();
    const [Userinput,setInput] = useState({name:"",
    projectId:"",
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
        Userinput["projectId"] = "1";
        addtask(Userinput);
        alert("added succefully")
        navigate("/dashboard/projects")
    }
    function addtask(prop:task) {
        return new Promise((resolve, reject) => {
          axios.post(addtaskurl, { name:prop.name,owner:prop.projectId,finishDate:prop.finishDate
            ,text:prop.text,
            particapent:prop.particapent}).then((res: unknown) => {
            resolve(res)
          })
          .catch((err: any) => reject(err))})
        }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let tempInput = {...Userinput};
        let property = String(event.target.name);
        if( property == "projectId" || property =="finishDate" || property =="text" || property == "name" )
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
    function handleSelectChange(event:React.ChangeEvent<HTMLSelectElement>) {
        let tempInput = {...Userinput};
        let property = String(event.target.name);
        if( property == "projectId")
        {
            tempInput[property] = event.target.value
            console.log(tempInput)
            setInput(tempInput)
        }
      }
  
  
    
    return(
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        <div className="signuparea">
        <form onSubmit={handleSubmit}>
            <div id="page-LogIn-form">
                <main>
                    <fieldset>
                        <legend>Create task</legend>
                        <legend>select working project </legend>
                        <Select   name="projectId" label="This is for: "
                            options={projects } 
                            onChange={handleSelectChange} required />
                                              <br></br>
                        <Input name="name" label="Task name" onChange={handleChange}required/>
                        <Input type="date" name="Line Date" label="finishDate" onChange={handleChange} required/>
                    </fieldset>
                    <Textarea label="Description" name="text" onChange={TextAreaHandle}> </Textarea>
                    <fieldset>
                        
                        choose participants:
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
                        creating your task

                    </footer>
                </main>
            </div>
        </form>
        </div>
        </IntlProvider>
    
    )
}
export default Createtask;