import react, { useState } from 'react'
import { IntlProvider } from 'react-intl';
import Layout from '../Layout';
import ProjectView from './Components/ProjectView';


import "./style/Tasks.scss"


interface layoutFn{
    langfunc:any
}

const messages:any =  require('../messages.js').default;
function TaskDetailed(props:layoutFn)
{const [locale, setLocale] = useState('en');
    return (
        
       
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        <ProjectView></ProjectView>
        </IntlProvider>)

      



        
}
export default TaskDetailed;