import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Loading } from '@/components/Loading';
import { PageLayout } from '@/components/PageLayout';
import { getUserCookie } from '@/utils/auth';
import { LoggedUser } from '@/utils/auth/type';

import {
  Title,
  Subtitle,
  QuestionContainer,
  QuestionLabel,
  RadioButtonsContainer,
  NextPageButton
} from './pageStyles/NewEvaluation2';

export const NewEvaluation2: NextPage = () => {
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
        <PageLayout user={user?.name} activeMenuItem={3}>
          <Title>Nova Avaliação</Title>
          <Subtitle>Sobre a disciplina</Subtitle>

          {/* Question 1 */}
          <QuestionContainer>
            <QuestionLabel>Question 1: Lorem ipsum dolor sit amet?</QuestionLabel>
            <RadioButtonsContainer>
              <label htmlFor="question1-concordo-totalmente">
                <input
                  id="question1-concordo-totalmente"
                  type="radio"
                  name="question1"
                  value="concordo-totalmente"
                />
                Concordo totalmente
              </label>
              <label htmlFor="question1-concordo">
                <input
                  id="question1-concordo"
                  type="radio"
                  name="question1"
                  value="concordo"
                />
                Concordo
              </label>
              <label htmlFor="question1-nao-sei">
                <input id="question1-nao-sei" type="radio" name="question1" value="nao-sei" />
                Não sei
              </label>
              <label htmlFor="question1-discordo">
                <input id="question1-discordo" type="radio" name="question1" value="discordo" />
                Discordo
              </label>
              <label htmlFor="question1-discordo-totalmente">
                <input
                  id="question1-discordo-totalmente"
                  type="radio"
                  name="question1"
                  value="discordo-totalmente"
                />
                Discordo totalmente
              </label>
            </RadioButtonsContainer>
          </QuestionContainer>

          {/* Question 2 */}
          <QuestionContainer>
            <QuestionLabel>Question 2: Lorem ipsum dolor sit amet?</QuestionLabel>
            <RadioButtonsContainer>
              <label htmlFor="question2-concordo-totalmente">
                <input
                  id="question2-concordo-totalmente"
                  type="radio"
                  name="question2"
                  value="concordo-totalmente"
                />
                Concordo totalmente
              </label>
              <label htmlFor="question2-concordo">
                <input
                  id="question2-concordo"
                  type="radio"
                  name="question2"
                  value="concordo"
                />
                Concordo
              </label>
              <label htmlFor="question2-nao-sei">
                <input id="question2-nao-sei" type="radio" name="question2" value="nao-sei" />
                Não sei
              </label>
              <label htmlFor="question2-discordo">
                <input id="question2-discordo" type="radio" name="question2" value="discordo" />
                Discordo
              </label>
              <label htmlFor="question2-discordo-totalmente">
                <input
                  id="question2-discordo-totalmente"
                  type="radio"
                  name="question2"
                  value="discordo-totalmente"
                />
                Discordo totalmente
              </label>
            </RadioButtonsContainer>
          </QuestionContainer>

          {/* Question 3 */}
          <QuestionContainer>
            <QuestionLabel>Question 3: Lorem ipsum dolor sit amet?</QuestionLabel>
            <RadioButtonsContainer>
              <label htmlFor="question3-concordo-totalmente">
                <input
                  id="question3-concordo-totalmente"
                  type="radio"
                  name="question3"
                  value="concordo-totalmente"
                />
                Concordo totalmente
              </label>
              <label htmlFor="question3-concordo">
                <input
                  id="question3-concordo"
                  type="radio"
                  name="question3"
                  value="concordo"
                />
                Concordo
              </label>
              <label htmlFor="question3-nao-sei">
                <input id="question3-nao-sei" type="radio" name="question3" value="nao-sei" />
                Não sei
              </label>
              <label htmlFor="question3-discordo">
                <input id="question3-discordo" type="radio" name="question3" value="discordo" />
                Discordo
              </label>
              <label htmlFor="question3-discordo-totalmente">
                <input
                  id="question3-discordo-totalmente"
                  type="radio"
                  name="question3"
                  value="discordo-totalmente"
                />
                Discordo totalmente
              </label>
            </RadioButtonsContainer>
          </QuestionContainer>

          {/* Question 4 */}
          <QuestionContainer>
            <QuestionLabel>Question 4: Lorem ipsum dolor sit amet?</QuestionLabel>
            <RadioButtonsContainer>
              <label htmlFor="question4-concordo-totalmente">
                <input
                  id="question4-concordo-totalmente"
                  type="radio"
                  name="question4"
                  value="concordo-totalmente"
                />
                Concordo totalmente
              </label>
              <label htmlFor="question4-concordo">
                <input
                  id="question4-concordo"
                  type="radio"
                  name="question4"
                  value="concordo"
                />
                Concordo
              </label>
              <label htmlFor="question4-nao-sei">
                <input id="question4-nao-sei" type="radio" name="question4" value="nao-sei" />
                Não sei
              </label>
              <label htmlFor="question4-discordo">
                <input id="question4-discordo" type="radio" name="question4" value="discordo" />
                Discordo
              </label>
              <label htmlFor="question4-discordo-totalmente">
                <input
                  id="question4-discordo-totalmente"
                  type="radio"
                  name="question4"
                  value="discordo-totalmente"
                />
                Discordo totalmente
              </label>
            </RadioButtonsContainer>
          </QuestionContainer>

          {/* Question 5 */}
          <QuestionContainer>
            <QuestionLabel>Question 5: Lorem ipsum dolor sit amet?</QuestionLabel>
            <RadioButtonsContainer>
              <label htmlFor="question5-concordo-totalmente">
                <input
                  id="question5-concordo-totalmente"
                  type="radio"
                  name="question5"
                  value="concordo-totalmente"
                />
                Concordo totalmente
              </label>
              <label htmlFor="question5-concordo">
                <input
                  id="question5-concordo"
                  type="radio"
                  name="question5"
                  value="concordo"
                />
                Concordo
              </label>
              <label htmlFor="question5-nao-sei">
                <input id="question5-nao-sei" type="radio" name="question5" value="nao-sei" />
                Não sei
              </label>
              <label htmlFor="question5-discordo">
                <input id="question5-discordo" type="radio" name="question5" value="discordo" />
                Discordo
              </label>
              <label htmlFor="question5-discordo-totalmente">
                <input
                  id="question5-discordo-totalmente"
                  type="radio"
                  name="question5"
                  value="discordo-totalmente"
                />
                Discordo totalmente
              </label>
            </RadioButtonsContainer>
          </QuestionContainer>

          <NextPageButton>Próxima Página</NextPageButton>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default NewEvaluation2;
