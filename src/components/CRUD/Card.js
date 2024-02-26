import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function PostListItem(props) {
    const user = useSelector(store => store.auth.user);

    function deletePost() {
        axios.delete(`https://medicalstore.mashupstack.com/api/medicine/${props.post.id}`, {
            headers: { 'Authorization': `bearer ${user.token}` }
        }).then(response => {
            alert(response.data.message)
            props.refresh()
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                {props.post.name}
                <button className="btn btn-danger btn-sm float-right m-1 border-0" style={{ backgroundColor: '#d71129' }} onClick={deletePost}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <Link to={`/updateAPI/${props.post.id}/edit`} className="btn btn-primary btn-sm float-right m-1 border-0" style={{ backgroundColor: '#be9865' }}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Link>
                <Link to={`/viewAPI/${props.post.id}`} className="btn btn-info btn-sm float-right m-1 border-0" style={{ backgroundColor: '#531251' }}>
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
        </div>
    )
}

export default PostListItem;
