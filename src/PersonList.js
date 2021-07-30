
const PersonList = ({person=[]}) => {
    return (
        <div>
            <ul>{person.map((one,i) => <li key={i}>{one['firstName']}</li>)}</ul>
        </div>
    )
}

export default PersonList;