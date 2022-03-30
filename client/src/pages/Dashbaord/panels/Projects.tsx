import react, { useState } from 'react'
import { IntlProvider } from 'react-intl';
import Layout from '../Layout';
import ProjectView from './Components/ProjectView';


import "./style/projects.scss"


interface layoutFn{
    langfunc:any
}

const messages:any =  require('../messages.js').default;
function TaskDetailed(props:layoutFn)
{const [locale, setLocale] = useState('en');
    return (
        
     
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        <div className="projects mb-4">
				<div className="projects-inner">
					<header className="projects-header">
						<div className="title">Ongoing Projects</div>
						<div className="count">| 5 Projects</div>
						<i className="zmdi zmdi-download"></i>
					</header>
					<table className="projects-table">
						<thead>
							<tr>
								<th>Project</th>
								<th>Deadline</th>
								<th>Leader + Team</th>
								<th>current task</th>
								<th>Status</th>
								<th className="text-right">Actions</th>
							</tr>
						</thead>
						<tr>
							<td>
								<p>Android App</p>
								<p>full stack</p>
							</td>
							<td>
								<p>13th nov, 15</p>
								<p className="text-danger">Overdue</p>
							</td>
							<td className="member">
								<figure><img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/71017297_2337862206528681_5209372585006989312_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hnhu7B4VzEUAX_e94iV&tn=DfB48anYWUi_OXtd&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8P4mI8yvKBUPSm9wFZjaq3pbsKiJ214yAn5a07gTuNhw&oe=62675F1B" /></figure>
								<div className="member-info">
									<p>saleem sbehe</p>
									<p>foursa</p>
								</div>
							</td>
							<td>
                                    <p>NULL</p>
                        
							</td>
							<td className="status">
								<span className="status-text status-orange">In progress</span>
							</td>
							<td>
								<form className="form" action="#" method="POST">
								<select className="action-box">
									<option>Actions</option>
									<option>edit</option>
									<option>remove</option>
									<option>delay</option>
								</select>
								</form>
							</td>
						</tr>
						<tr className="danger-item">
							<td>
								<p>DataBase</p>
								<p>DB team</p>
							</td>
							<td>
								<p>11th ju, 22</p>
								<p className="text-danger">Overdue</p>
							</td>
							<td className="member">
								<figure><img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/71017297_2337862206528681_5209372585006989312_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hnhu7B4VzEUAX_e94iV&tn=DfB48anYWUi_OXtd&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8P4mI8yvKBUPSm9wFZjaq3pbsKiJ214yAn5a07gTuNhw&oe=62675F1B" /></figure>
								<div className="member-info">
									<p>saleem sbehe</p>
									<p>foursa</p>
								</div>
							</td>
							<td>
								<p>NULL</p>
								<p>NULL</p>
							</td>
							<td className="status">
								<span className="status-text status-red">Blocked</span>
							</td>
							<td>
								<form className="form" action="#" method="POST">
									<select className="action-box">
										<option>Actions</option>
										<option>edit</option>
										<option>remove</option>
										<option>delay</option>
									</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>UI and UX</p>
								<p>ux team</p>
							</td>
							<td>
								<p>12th Oct, 15</p>
								<p className="text-danger">Overdue</p>
							</td>
							<td className="member">
								<figure><img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/71017297_2337862206528681_5209372585006989312_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hnhu7B4VzEUAX_e94iV&tn=DfB48anYWUi_OXtd&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8P4mI8yvKBUPSm9wFZjaq3pbsKiJ214yAn5a07gTuNhw&oe=62675F1B" /></figure>
								<div className="member-info">
									<p>saleem sbehe</p>
									<p>foursa</p>
								</div>
							</td>
							<td>
								<p>NULL</p>
								<p>NULL</p>
							</td>
							<td className="status">
								<span className="status-text status-orange">In progress</span>
							</td>
							<td>
								<form className="form" action="#" method="POST">
									<select className="action-box">
						  <option>Actions</option>
						  <option>edit</option>
						  <option>remove</option>
						  <option>delay</option>
						</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>Finishing</p>
								<p>qa</p>
							</td>
							<td>
								<p>2th ap, 12</p>
								<p className="text-danger">Overdue</p>
							</td>
							<td className="member">
								<figure><img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/71017297_2337862206528681_5209372585006989312_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hnhu7B4VzEUAX_e94iV&tn=DfB48anYWUi_OXtd&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8P4mI8yvKBUPSm9wFZjaq3pbsKiJ214yAn5a07gTuNhw&oe=62675F1B" /></figure>
								<div className="member-info">
									<p>saleem sbehe</p>
									<p>foursa</p>
								</div>
							</td>
							<td>
								<p>NULL</p>
								<p>NULL</p>
							</td>
							<td className="status">
								<span className="status-text status-blue">Early stages</span>
							</td>
							<td>
								<form className="form" action="#" method="POST">
									<select className="action-box">
						  <option>Actions</option>
						  <option>edit</option>
						  <option>remove</option>
						  <option>delay</option>
						</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>New Dashboard</p>
								<p>release team</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p className="text-danger">Overdue</p>
							</td>
							<td className="member">
								<figure><img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/71017297_2337862206528681_5209372585006989312_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hnhu7B4VzEUAX_e94iV&tn=DfB48anYWUi_OXtd&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8P4mI8yvKBUPSm9wFZjaq3pbsKiJ214yAn5a07gTuNhw&oe=62675F1B" /></figure>
								<div className="member-info">
									<p>saleem sbehe</p>
									<p>foursa</p>
								</div>
							</td>
							<td>
								<p>NULL</p>
								<p>NULL</p>
							</td>
							<td className="status">
								<span className="status-text status-orange">In progress</span>
							</td>
							<td>
								<form className="form" action="#" method="POST">
									<select className="action-box">
						  <option>Actions</option>
						  <option>edit</option>
						  <option>remove</option>
						  <option>delay</option>
						</select>
								</form>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
        </IntlProvider>)

      



        
}
export default TaskDetailed;