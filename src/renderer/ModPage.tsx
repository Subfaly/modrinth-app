const ModPage = ({ data }) => {
     const openBr = () => {
          //require('electron').shell.openExternal(`https://modrinth.com/mod/${data.slug}`);
     }
     return (
       <div className="mod">
         <h2 className="mod-title">{data['title']}</h2>
         <p className="mod-desc">{data.description}</p>
         <a
           className="mod-open"
           href={`https://modrinth.com/mod/${data.slug}`}
           target="_blank"
           rel="noreferrer"
         >
           <button className="mod-open" onClick={openBr}>
             Open in browser
           </button>
         </a>
       </div>
     );
}
export default ModPage