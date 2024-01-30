import '../card.css'

export default function Card(props) {
  return (
    <>
      <div className='card'>
        <h2 className='card-title'>{props.title}</h2>
        <div>
          <p>
            {props.desc}
          </p>
        </div>
        <button className='del-btn' onClick={props.onDelete}>Delete</button>
      </div>
    </>
  );
}
