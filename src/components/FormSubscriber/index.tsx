import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($email: String!, $name: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

interface CreateSubscriberMutationProps {
  id: string;
}

export function FormSubscriber() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] =
    useMutation<CreateSubscriberMutationProps>(CREATE_SUBSCRIBE_MUTATION);

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
      <input
        type="text"
        placeholder="Seu nome completo"
        className="bg-gray-900 rounded px-5 h-14"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu e-mail"
        className="bg-gray-900 rounded px-5 h-14"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="py-4 mt-4 text-sm uppercase rounded font-bold bg-green-500 hover:bg-green-700 transition-colors disabled:bg-opacity-50"
      >
        Garantir minha vaga
      </button>
    </form>
  );
}
