import useFetch from "./useFetch"
function App(){
  const{data, loading, errors}=useFetch('https://jsonplaceholder.typicode.com/posts?_limit=18&_delay=2000')
  return( <div>
    {loading && <div>chargement...</div>}
    {data && <div>
      <ul>
        {data.map(post=>(<li key={post.id}>{post.title}</li>))}
      </ul>
      </div>}
  </div>
)}
export default App