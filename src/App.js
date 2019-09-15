import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: 'Matheus',
                email: 'matheus@jovem.com',
                senha: '',
                sexo: 'masculino'
            }
        }
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }
    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} /> <br />
                    <label>Email</label>
                    <input type="email" value={this.state.form.email} onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                    <label>Senha</label>
                    <input type="password" value={this.state.form.senha} onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
                    <label>Sexo</label>
                    <select name='sexo' value={this.state.form.sexo}>
                        <option name='sexo' value="masculino">Masculino</option>
                        <option name='sexo' value="feminino">Feminino</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                </form>

                <div>
                    <h3>{this.state.form.nome}</h3>
                </div>

            </div >
        );
    }
}

export default App;