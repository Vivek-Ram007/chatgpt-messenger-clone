import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
export default function Home() {
  return (
    <div className='h-screen text-white flex-col-center'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex-col-center mb-5'>
            <SunIcon className='h-8 w-8' />
            <h2 className=''>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>&ldquo;Explain Something to me&rdquo;</p>
            <p className='infoText'>
              &ldquo;What is the difference between a cat and dog?&rdquo;
            </p>
            <p className='infoText'>
              &ldquo;What is the color of the sun?&rdquo;
            </p>
          </div>
        </div>
        <div>
          <div className='flex-col-center mb-5'>
            <BoltIcon className='h-8 w-8' />
            <h2 className=''>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              &ldquo;Change the ChatGPT model to use &rdquo;
            </p>
            <p className='infoText'>
              &ldquo;Messages are stored in Firebase&lsquo;s FireStore&rdquo;
            </p>
            <p className='infoText'>
              &ldquo;Hot toast notification when ChatGPT is thinking&rdquo;
            </p>
          </div>
        </div>
        <div>
          <div className='flex-col-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2 className=''>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              &ldquo;May Occasionally generate incorrect data &rdquo;
            </p>
            <p className='infoText'>
              &ldquo;May occasionally produce harmful and biased content&rdquo;
            </p>
            <p className='infoText'>
              &ldquo;Limited knowledge of worlds and events after 2021&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
