import { login } from "@/lib/auth";

export default function SignInPage(){
    return (
        <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
            <div>
                <div>
                    <h2>Welcome to the jobboard</h2>
                    <p>Sign in to post jobs or apply for opportunites</p>
                </div>

                <div>
                    <button onClick={login}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="" clipRule="evenodd" />
                        </svg>
                        <span>Continue with Github</span>
                    </button>
                </div>
                <div>By signing in, you agree to our <a>Terms of Service</a> and <a>Privacy Policy</a></div>
            </div>
        </div>
    );
}