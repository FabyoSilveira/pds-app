import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Loading } from '@/components/Loading';
import { PageLayout } from '@/components/PageLayout';
import { getUserCookie } from '@/utils/auth';
import { LoggedUser } from '@/utils/auth/type';

import { 
  Row,
  HorizontalRule,
  FormContainer,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ReverseButton
} from './pageStyles/Home';

interface FormData {
  nome: string;
  email: string;
  matricula: string;
  senha: string;
}

export const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedUser = getUserCookie();

    if (!loggedUser) {
      router.push('/');
    } else {
      setUser(loggedUser as LoggedUser);
      setLoading(false);
    }
  }, []);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<LoggedUser>();
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    matricula: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // You can perform any action with the form data here
  };

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={0}>
          <Row>
            <h1>{`Bem vindo ao seu perfil, ${user?.name}!`}</h1>
            <HorizontalRule />
          </Row>
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="nome">Nome</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Fabyo Silveira"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="fabyosilveira@aol.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="matricula">Matrícula</Label>
              <Input
                type="text"
                id="matricula"
                name="matricula"
                value={formData.matricula}
                onChange={handleChange}
                placeholder="2020000000"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="senha">Senha</Label>
              <Input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="******"
              />
            </FormGroup>
            <FormGroup>
              <SubmitButton type="submit">SALVAR</SubmitButton>
            </FormGroup>
            <FormGroup>
              <ReverseButton type="reverse">REVERTER ALTERAÇÕES</ReverseButton>
            </FormGroup>
          </FormContainer>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
