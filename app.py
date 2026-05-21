from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'coremotors_chave_secreta'

def ligar_banco():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Theo e tody@2006",
        database="core_motors"
    )

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/explorar')
def explorar():
    return render_template('explorar.html')

@app.route('/filtro')
def filtro():
    return render_template('filtro.html')

@app.route('/favorito')
def favorito():
    return render_template('favorito.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/ajuda')
def ajuda():
    return render_template('ajuda.html')

@app.route('/suporte')
def suporte():
    return render_template('suporte.html')

@app.route('/login')
def pagina_login():
    return render_template('login.html')

@app.route('/cadastro')
def pagina_cadastro():
    return render_template('cadastro.html')

@app.route('/ficha')
def ficha():
    return render_template('ficha.html')

@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    nome = request.form.get('nome')
    email = request.form.get('email')
    senha = request.form.get('senha')
    confirmar = request.form.get('confirmar_senha')

    if senha != confirmar:
        return "Erro: As senhas não coincidem!", 400

    try:
        conexao = ligar_banco()
        cursor = conexao.cursor()
        
        sql = "INSERT INTO usuarios (nome_completo, email, senha) VALUES (%s, %s, %s)"
        cursor.execute(sql, (nome, email, senha))
        
        conexao.commit()
        cursor.close()
        conexao.close()
        return redirect(url_for('pagina_login'))
    
    except mysql.connector.Error as err:
        return f"Erro ao cadastrar: {err}", 500

@app.route('/fazer_login', methods=['POST'])
def fazer_login():
    email = request.form.get('email')
    senha = request.form.get('senha')

    conexao = ligar_banco()
    cursor = conexao.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM usuarios WHERE email = %s AND senha = %s", (email, senha))
    usuario = cursor.fetchone()
    
    cursor.close()
    conexao.close()

    if usuario:
        return redirect(url_for('home'))
    else:
        return "E-mail ou senha incorretos!", 401

if __name__ == '__main__':
    app.run(debug=True)