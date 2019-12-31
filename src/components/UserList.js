import React from 'react';
import Link from './Link';
const UserList = (props) => {
    const { id, displayName, fullName, email, userGroup } = props.data;
    return (
        <div className="card has-margin-bottm-10">
            <header className="card-header">
                <p className="card-header-title">
                    {fullName}
                </p>
                <Link to="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </Link>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>
                        {displayName}
                    </p>
                    <p>
                        {id}
                    </p>
                    <Link to="mailto:{email}">{email}</Link><br />
                    <Link to="#">#{userGroup}</Link>
                    
                </div>
            </div>
            <footer className="card-footer">
                <Link to="#" className="card-footer-item">Save</Link>
                <Link to="#" className="card-footer-item">Edit</Link>
                <Link to="#" className="card-footer-item">Delete</Link>
            </footer>
        </div>

    )
}

export default UserList;