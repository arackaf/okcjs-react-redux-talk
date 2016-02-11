import React from 'react';
import { connect } from 'react-redux';
import books from '../data/books';
import subjects from '../data/subjects';
import { selector } from './store';


class Main extends React.Component {
    increment(){
        this.props.dispatch({ type: 'INCREMENT' });
    }
    decrement(){
        this.props.dispatch({ type: 'DECREMENT' });
    }
    componentDidMount(){
        this.props.dispatch({ type: 'SUBJECTS_LOADED', subjects: subjects });
        this.props.dispatch({ type: 'BOOKS_LOADED', books: books });
    }
    toggleBook(_id){
        this.props.dispatch({ type: 'TOGGLE_BOOK', _id })
     }
    render(){
        return (
            <div>
                <div>{'Value: ' + this.props.value} <button onClick={() => this.increment()}>+</button><button onClick={() => this.decrement()}>-</button></div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Subjects</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.books.map(b =>
                            <tr>
                                <td><input type="checkbox" checked={!!b.selected} onClick={() => this.toggleBook(b._id)} /> </td>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td><ul>{b.subjects.map(s => <li>{s.name}</li>)}</ul></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const ConnectedMain = connect(selector)(Main);

export default ConnectedMain;