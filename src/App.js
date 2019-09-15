import React, { Component } from 'react';
import Feed from './components/Feed/'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Matheus', curtidas: 20, comentarios: 2 },
                { id: 2, username: 'Lucas', curtidas: 200, comentarios: 15 },
                { id: 3, username: 'Nayara', curtidas: 500, comentarios: 30 },
                { id: 4, username: 'Ricardo', curtidas: 3, comentarios: 0 }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <Feed key={item.id} username={item.username}
                            curtidas={item.curtidas} comentarios={item.comentarios} />
                    );
                })}
            </div>
        );
    }
}

export default App;