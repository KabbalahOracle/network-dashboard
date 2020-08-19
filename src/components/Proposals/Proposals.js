import React from 'react'
import { useHistory } from 'react-router-dom'
import { CardLayout, Header, GU } from '@aragon/ui'
import Layout from '../Layout'
import ProposalCard from './ProposalCard'
import { useVotes } from '../../hooks/disputable-voting-logic'

const Proposals = React.memo(function Proposals() {
  const history = useHistory()
  const votes = useVotes()

  const handleProposalClick = (proposalId) => {
    history.push(`/proposals/${proposalId}`)
  }

  return (
    <section>
      <Layout>
        <Header primary="Proposals" />
        {votes ? (
          <CardLayout columnWidthMin={30 * GU} rowHeight={294}>
            {votes.map((vote) => (
              <ProposalCard
                key={vote.voteId}
                vote={vote}
                onProposalClick={handleProposalClick}
              />
            ))}
          </CardLayout>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </section>
  )
})

export default Proposals
