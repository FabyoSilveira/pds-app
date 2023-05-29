import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Loading } from '@/components/Loading'
import { PageLayout } from '@/components/PageLayout'
import { getUserCookie } from '@/utils/auth'
import { LoggedUser } from '@/utils/auth/type'

import {
  StyledH3,
  StyledA,
  StyledH5,
  StyledProgress,
  StyledProgressBarContainer,
  StyledDiv,
  PageWidth,
} from '../pageStyles/EvaluationDetails'
import api from '@/api'

export const EvaluationDetails: NextPage = () => {
  const router = useRouter()
  const { id: courseId } = router.query

  useEffect(() => {
    const loggedUser = getUserCookie()

    if (!loggedUser) {
      router.push('/')
    } else {
      setUser(loggedUser as LoggedUser)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (courseId) {
      api
        .get(`Course?id=${courseId}`)
        .then((res) => {
          console.log(res)
          setCourse(res.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [courseId])

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<LoggedUser>()
  const [course, setCourse] = useState()

  return (
    <>
      {!loading ? (
        <PageLayout user={user?.name} activeMenuItem={2}>
          <h1>{course?.name}</h1>
          <StyledH3>
            Professor(a) Relacionado(a): <StyledA href='#'>Gertrudes</StyledA>
          </StyledH3>
          <br />
          <StyledH3>Média das Respostas:</StyledH3>
          <StyledH5>Quanto maior a % mais pessoas concordaram</StyledH5>
          <PageWidth>
            <StyledProgressBarContainer>
              <StyledDiv>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit:
                </span>
              </StyledDiv>
              <div>
                <StyledProgress value={80} max={100} />
                <span>80%</span>
              </div>
            </StyledProgressBarContainer>
            <StyledProgressBarContainer>
              <StyledDiv>
                <span>Lorem ipsum dolor sit amet:</span>
              </StyledDiv>
              <div>
                <StyledProgress value={60} max={100} />
                <span>60%</span>
              </div>
            </StyledProgressBarContainer>
            <StyledProgressBarContainer>
              <StyledDiv>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua:
                </span>
              </StyledDiv>
              <div>
                <StyledProgress value={75} max={100} />
                <span>75%</span>
              </div>
            </StyledProgressBarContainer>
            <StyledProgressBarContainer>
              <StyledDiv>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit:
                </span>
              </StyledDiv>
              <div>
                <StyledProgress value={90} max={100} />
                <span>90%</span>
              </div>
            </StyledProgressBarContainer>
            <StyledProgressBarContainer>
              <StyledDiv>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit:
                </span>
              </StyledDiv>
              <div>
                <StyledProgress value={50} max={100} />
                <span>50%</span>
              </div>
            </StyledProgressBarContainer>
          </PageWidth>
        </PageLayout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default EvaluationDetails
