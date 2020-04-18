import styled from 'styled-components'

const CommentsStyles = styled.div`
  max-width: 80rem;
  width: 100%;
  padding: 5rem 1rem;
  justify-self: center;
  .comment {
    padding-left: 3rem;
    border-left: 0.5rem solid ${props => props.theme.green};
    border-bottom: 0.2rem solid ${props => props.theme.orange};
    background: ${props => props.theme.green + '4D'};
    :after {
      content: "";
      height: 0.2rem;
      width: 100%;
      background: ${props => props.theme.orange};
    }
  }
  .comment-reply {
    padding-left: 3rem;
    border-left: 0.5rem solid ${props => props.theme.green};
    margin-left: 5rem;
    margin-top: 5rem;
    padding-bottom: 1rem;
  }
  .comment-text {
    font-size: 2rem;
  }
  .comment-date {
    font-size: 1.5rem;
    margin-left: 2rem;
  }
  .comments-count {
    text-align: center;
  }
`

export default CommentsStyles
