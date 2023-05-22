import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Loading } from '@/components/Loading';
import { PageLayout } from '@/components/PageLayout';
import { getUserCookie } from '@/utils/auth';
import { LoggedUser } from '@/utils/auth/type';
import { FilterRow, Filter, Search, CardColumns, Card } from './pageStyles/ExploreEvaluations';

export const ExploreEvaluations: NextPage = () => {
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

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={2}>
          <h1>{`Explorar Avaliações`}</h1>
          <FilterRow>
            <Filter>
              <label htmlFor="filter-type">Mostrar:</label>
              <select className="custom-select" id="filter-type">
                <option value="all">Todos</option>
                <option value="subjects">Matérias</option>
                <option value="teachers">Professores</option>
              </select>
              <label htmlFor="filter-sort">Ordenar por:</label>
              <select className="custom-select" id="filter-sort">
                <option value="recent">Mais recentes</option>
                <option value="oldest">Mais antigas</option>
                <option value="reviews">Mais avaliações</option>
              </select>
            </Filter>
            <Search>
              <input type="text" placeholder="Buscar" />
              <button>Buscar</button>
            </Search>
          </FilterRow>
          <CardColumns>
            <Card>
              <h2>Programação e Desenvolvimento de Software I</h2>
              <h3>DCC203</h3>
              <p>33 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
            <Card>
              <h2>Richarlisson</h2>
              <h3>Equações Diferenciais C</h3>
              <p>7 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
            <Card>
              <h2>Equações Diferenciais C</h2>
              <h3>MAT040</h3>
              <p>16 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
            <Card>
              <h2>Gertrudes</h2>
              <h3>Programação e Desenvolvimento de Software I</h3>
              <p>20 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
            <Card>
              <h2>Fundamentos de Sistemas Paralelos e Distribuídos</h2>
              <h3>DCC641</h3>
              <p>9 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
            <Card>
              <h2>Pedro Pascal</h2>
              <h3>Fundamentos de Sistemas Paralelos e Distribuídos</h3>
              <p>13 avaliações</p>
              <a href="#">Ver Detalhes</a>
            </Card>
          </CardColumns>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ExploreEvaluations;
