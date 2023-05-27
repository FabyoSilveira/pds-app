import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import {
  Container,
  Title,
  Form,
  Label,
  Select,
  Input,
  Button,
  LoadingContainer,
} from './pageStyles/NewEvaluation';


export const NewEvaluation: NextPage = () => {
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
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleDisciplineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDiscipline(event.target.value);
  };

  const handleSemesterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSemester(event.target.value);
  };

  const handleNextPageClick = () => {
    // Perform any necessary validations or processing before navigating to the next page
    router.push('/new-evaluation-2');
  };

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={3}>
          <Title>Nova Avaliação</Title>
          <Form>
            <Label>Qual disciplina deseja avaliar?</Label>
            <Select value={selectedDiscipline} onChange={handleDisciplineChange}>
              <option value="">Selecione a disciplina</option>
              <option value="Prática em Desenvolvimento de Software I">Prática em Desenvolvimento de Software I</option>
              <option value="Algoritmos I">Algoritmos I</option>
              <option value="Fundamentos de Sistemas Paralelos e Distribuídos">Fundamentos de Sistemas Paralelos e Distribuídos</option>
              <option value="Geometria Analítica e Álgebra Linear">Geometria Analítica e Álgebra Linear</option>
              <option value="Lorem Ipsum">Lorem Ipsum</option>
              <option value="Lorem Ipsum">Lorem Ipsum</option>
              <option value="Lorem Ipsum">Lorem Ipsum</option>
              <option value="Lorem Ipsum">Lorem Ipsum</option>
            </Select>
            <Button onClick={handleNextPageClick}>Próxima Página</Button>
          </Form>
        </PageLayout>
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </>
  );
};

export default NewEvaluation;