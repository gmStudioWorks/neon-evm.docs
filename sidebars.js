/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [ {
      type: 'category',
      label: 'About',
      items: [
        'intro',
        'glossary',
      ],
    }, {
      type: 'category',
      label: 'Wallets',
      items: [ {
          type: 'category',
          label: "Installing and setting up MetaMask",
          items: [
              "wallet/setup_metamask/metamask_setup",
              "wallet/setup_metamask/dummy",
              "wallet/setup_metamask/dummy",
          ]
        },
        "wallet/wallets"
      ]
    }, {
      type: 'category',
      label: 'Token transferring',
      items: [
        "token_transferring/using_3d_party_bridges",
        {
          type: 'category',
          label: 'Transferring SPL Tokens via Neon Pass',
          items: [
              // overview
          ]
        }
      ]
    },{
      type: 'category',
      label: 'Architecture',
      items:
      [
        'architecture/eth_sol_solution',
        'architecture/neon_evm_arch',
        'architecture/value_token',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items:
      [
        'governance/governance_overview',
        'governance/governance_ui',
      ],
    },
    {
      type: 'category',
      label: 'Devportal',
      items:
      [
        'devportal/bpf_trace',
        'devportal/using_truffle',
        'devportal/deploy_contract_via_remix',
      ],
    },
    {
      type: 'category',
      label: 'Local Solana Cluster',
      items:
      [
        'solana_cluster/cluster_installation',
      ],
    },
    {
      type: 'category',
      label: 'Neon Pass',
      items:
      [
        'neonpass/neonpass_overview',
        'neonpass/transferring_spl_tokens',
      ],
    },
    {
      type: 'category',
      label: 'Neon Swap',
      items:
      [
        'neonswap/neonswap_overview',
        'neonswap/neonswap',
        'neonswap/neonswap_tests',
      ],
    },
    {
      type: 'category',
      label: 'Neon Proxy',
      items:
      [
        'proxy/url_table',
        'proxy/connect_to_solana_via_proxy',
        'proxy/operator_guide',
        'proxy/choosing_proxy',
      ],
    },
    {
      type: 'category',
      label: 'Supported Standards',
      items:
      [
        'supported_standards/standards_overview',
        'supported_standards/erc20wrapper',
      ],
    },
    {
      type: 'category',
      label: 'Software Manuals',
      items:
      [
        {
          type: 'category',
          label: 'Core Aspects',
          items: 
          [
            'software_manuals/foundational_topics/web3',
            'software_manuals/foundational_topics/account',
            'software_manuals/foundational_topics/transaction',
            'software_manuals/foundational_topics/block',
            'software_manuals/foundational_topics/gas',
            'software_manuals/foundational_topics/proof-of-work',
            'software_manuals/foundational_topics/proof-of-stake',
            'software_manuals/foundational_topics/solana-cluster',
          ],
        },
        {
          type: 'category',
          label: 'How to Guides',
          items: 
          [
            'software_manuals/how_to_guides/deploy_contract',
            'software_manuals/how_to_guides/connect_metamask_to_solana',
            'software_manuals/how_to_guides/get_list_available_tokens',
            'software_manuals/how_to_guides/swap_erc20',
            'software_manuals/how_to_guides/support_docs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design Proposals',
      items: 
      [
        {
          type: 'category',
          label: 'Implemented',
          items: 
          [
            'design_proposals/implemented/implemented_proposals',
          ],
        },
        {
          type: 'category',
          label: 'Accepted',
          items:
          [
            'design_proposals/accepted/accepted_proposals',
            'design_proposals/accepted/restriction_on_iterative_trx',
            'design_proposals/accepted/spl_token_precision',
            'design_proposals/accepted/erc721-tokens',
            'design_proposals/accepted/precompiled_contracts',
            'design_proposals/accepted/gas_calculator',
            'design_proposals/accepted/unsupported_functions',
            'design_proposals/accepted/storage_size_for_account',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Neon FAQ',
      items: 
      [
        'faq/neon-faq',
      ],
    },

  ],
};
