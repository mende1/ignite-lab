export function LessonDetails() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">
        Aula 01 - Criando o projeto e realizando o setup inicial
      </h1>
      <p className="mt-4 text-gray-200 leading-relaxed">
        Nessa aula vamos dar início ao projeto criando a estrutura base da
        aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar
        o setup do nosso projeto no GraphCMS criando as entidades da aplicação e
        integrando a API GraphQL gerada pela plataforma no nosso front-end
        utilizando Apollo Client.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <img
          className="h-16 w-16 rounded-full border-2 border-blue-500"
          src="https://github.com/mende1.png"
          alt="Foto de perfil do Professor"
        />
        <div className="leading-relaxed">
          <strong className="font-bold text-2xl block">Gustavo Mendel</strong>
          <span className="text-gray-200 text-sm block">Software Engineer</span>
        </div>
      </div>
    </div>
  );
}
