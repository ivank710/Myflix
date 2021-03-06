import {connect} from 'react-redux';
import Browse from './browse';
import {fetchMovies} from '../../actions/movies_actions';
import {logout} from '../../actions/session_actions';
import {createListItem} from '../../actions/list_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  movies: Object.values(state.entities.movies)
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  logout: () => dispatch(logout()),
  createListItem: (data) => dispatch(createListItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);