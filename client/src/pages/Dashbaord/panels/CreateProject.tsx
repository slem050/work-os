import react, { useState } from "react"
import { IntlProvider } from "react-intl";
import Layout from "../Layout";


const messages:any =  require('../messages.js').default;

interface layoutFn{
    langfunc:any
}

function CreateProject(props:layoutFn)
{
    const [locale, setLocale] = useState('en');
    return(
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        <h1>ghfvhjgyhj</h1>
        </IntlProvider>
    
    )
}
export default CreateProject;