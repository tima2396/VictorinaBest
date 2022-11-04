const React = require('react');
const Layout = require('./Layout');

const ThemePage = ({ title, tems ,i, id}) => {
    return (
        <Layout title={title}>
            <form id="questForm" action='/quest' method='post'>
            <div>
                <h1 className='h1'>Questions</h1>
               
            </div>
            <ul className='ul'>
            {/* {quests.map(quest=>(
                <div>
                    <h5>{quest.question}</h5>
                    <input name="answer" type="text"></input>
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Ответить</button>
                </div>
            ))} */}
            <div data-id={i} data-topic={tems.question} className="col-12 col-md-9 col-lg-7 col-xl-6 que">
            <p>{tems.question}</p>
            <input type='text' name="answer"></input>
            </div>
            <br></br>
            <div className='result'></div>
            <button type='submit'>Click</button>
            <a href={`/quest/${tems.idTheme}/${+i+1}`} >Next question</a>
            </ul>
            </form>
            <script defer src='/js/question.js' ></script>
        </Layout>
    )
}
module.exports=ThemePage
