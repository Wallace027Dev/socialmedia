import { useState } from "react";
import "../styles/PostForm.css";
import userIcon from "../images/user.svg";
import paperPlaneIcon from "../images/paper-plane.svg";
import loader from "../images/loader-white.svg";
import { createPost } from "../services/postsServices";

export default function PostForm(props) {
  const [history, setHistory] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      setIsLoading(true);
      setErrorMessage(null);

      if (history.trim() !== "" && userName.trim() !== "") {
        const response = await createPost({
          history,
          userName
        });

        if (response) {
          props.onSubmit({ history, userName });

          setHistory("");
          setUserName("");
        } else {
          setErrorMessage("Erro ao cadastrar o post. Resposta incompleta.");
        }
      } else {
        setErrorMessage(
          "Por favor, preencha todos os campos antes de publicar."
        );
      }
    } catch {
      setErrorMessage("Ocorreu um erro ao cadastrar o post!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error-container">
          <strong>{errorMessage}</strong>
        </div>
      )}
      <input
        value={history}
        placeholder="Escreva uma nova história..."
        onChange={(event) => setHistory(event.target.value)}
      />

      <div>
        <img src={userIcon} alt="User" />

        <input
          value={userName}
          placeholder="Digite seu nome..."
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {!isLoading && <img src={paperPlaneIcon} alt="Paper plane" />}
          {isLoading && <img src={loader} alt="Loading" className="spin" />}
          Publicar
        </button>
      </div>
    </form>
  );
}
