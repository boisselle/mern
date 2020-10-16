import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost]);
    
    return loading || post === null ? <Spinner /> : <Fragment>
        <Link to='/posts' className='btn'>
            Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
    </Fragment>
};

post.propTypes = {
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);