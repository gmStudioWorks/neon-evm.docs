---
title: Overview
---

## The Neon DAO

The Neon DAO is a collection of community-led, community-driven organizations that foster and enhance decentralization, resilence, and self-sustainability for the Neon EVM platform and ecosystem. To do so, community members reach consensus on solving issues, develop rules for the functioning of the Neon DAO, and change the governance rules themselves through contractual amendments, if applicable.

The Neon DAO's Assemblies are built using [SPL Governance](https://github.com/solana-labs/solana-program-library/tree/master/governance), a versatile DAO creation tool for the Solana blockchain.

## Voting Process Overview

1. Any DAO participant may bring their ideas to the community via the [Neon Forum](https://forum.neon-labs.org/). These ideas will be discussed on the Forum and evaluated by the community to gauge whether there is enough will and consensus to effect changes to kick off the next stage. This stage can be considered as an **off-chain** governance voting. 
2. If there is enough consensus for the idea to be discussed further, a DAO participant then creates an official proposal on Neon DAO. This is now on-chain governance territory, and the components for it are implemented on Solana.  
3. Once the proposal has been made, DAO participants may temporarily lock up their NEON tokens and receive their respective voting rights to vote on the proposal. DAO participants vote on this proposal during a pre-defined voting period
   * 1 NEON token = 1 vote
   * A proposal is accepted if
     1. The number of **"Yes"** votes exceeds a pre-determined threshold amount, and
     2. The number of **"Yes"** votes exceeds the number of **"No"** votes
   * Otherwise, the proposal is rejected
4. Any DAO member can execute transactions in approved proposal during the **hold-up period**, which is the minimum time required to elapse before an approved proposal may be executed.

All Neon DAO parameters, such as the pass threshold to accept a proposal, voting period, hold-up period, and the minimum token amount required to create a proposal, can be found in the Neon Governance UI.

Learn more about the [voting process](/docs/governance/proposals/proposals.md).

## Neon DAO Organization

Neon is decentralized and its economy is fee-based, with NEON tokens being used for governance purposes. Following the same philosophy, the Neon DAO is itself handled by a decentralized protocol with a clear and user-friendly process for proposing and voting for protocol improvements. It is organized as a series of decentralized **Assemblies** that are each responsible for a different aspect of the decisionmaking process. These Assemblies are grouped into the following three **Focus Areas**:

### Ecosystem Focus Area

The [Ecosystem Focus Area](/docs/governance/neon_daos/#ecosystem-focus-area) contains the Assemblies responsible for the promotion of Neon community initiatives and incentivizing long-term ecosystem growth. The use cases involving this Focus Area include [rewarding users and teams for creating Neon ecosystem projects](/docs/governance/neon_daos/#usage-scenarios).

### Development Focus Area

The [Development Focus Area](/docs/governance/neon_daos/#development-focus-area) contains the Assembly responsible for the technical aspects of the Neon EVM. An example of a use case involving this Focus Area is [updating the Neon EVM version](/docs/governance/neon_daos/#usage-scenarios-1).

### Security Focus Area

The [Security Focus Area](/docs/governance/neon_daos/#security-focus-area) contains the Assemblies responsible for monitoring activity in the other two Focus Areas to stop malicious actors attempting to exploit the Neon DAO. A use case example involving this Focus Area is [preventing the Neon EVM being updated with malicious code](/docs/governance/proposals/#preventing-evm-being-updated-with-malicious-code).

For more details on Neon's Assemblies and the differences and interactions between them, see the [NEON Assemblies section](/docs/governance/neon_daos/).
