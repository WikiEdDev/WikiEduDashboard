export default assignment => ([
  {
    title: 'Complete your bibliography',
    content: 'Compile a list of reliable and verifiable secondary sources for the subject you\'ll be contributing to.',
    status: 'not_yet_started',
    trainings: [
      {
        title: 'Related Training Modules',
        path: 'resources#complete-your-bibliography'
      },
      {
        title: 'Bibliography',
        path: `${assignment.sandboxUrl}/Bibliography?veaction=edit&preload=Template:Dashboard.wikiedu.org_bibliography`,
        external: true
      }
    ]
  },
  {
    title: 'Create in the sandbox',
    content: 'In your designated sandbox, begin to sketch out your contribution.',
    status: 'in_progress',
    trainings: [
      {
        title: 'Related Training Modules',
        path: 'resources#create-in-the-sandbox'
      },
      {
        title: 'Sandbox',
        path: assignment.sandboxUrl,
        external: true
      }
    ]
  },
  {
    title: 'Expand your draft',
    content: 'Continue to build your contribution and prepare to move it into the article main space.',
    status: 'ready_for_review',
    trainings: [
      {
        title: 'Related Training Modules',
        path: 'resources#expand-your-draft'
      },
      {
        title: 'Sandbox',
        path: assignment.sandboxUrl,
        external: true
      }
    ]
  },
  {
    title: 'Move your work',
    content: 'It\'s time to move your contribution into the article main space and make your work live!',
    status: 'ready_for_mainspace',
    trainings: [
      {
        title: 'Related Training Modules',
        path: 'resources#move-your-work'
      },
      {
        title: 'Sandbox',
        path: assignment.sandboxUrl,
        external: true
      },
      {
        title: 'Article',
        path: assignment.article_url,
        external: true
      }
    ]
  }
]);
