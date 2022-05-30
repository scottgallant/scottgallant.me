import Signup from "./newsletter-signup";
import SocialLinks from "./social-links";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 px-8 lg:px-0">
            <div className="max-w-3xl mx-auto space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mt-8 hidden md:block">
                    <p className="text-base text-gray-400">&copy; 2022 scottgallant.me</p>
                    <SocialLinks />
                </div>
                <div>
                    <Signup />
                </div>
            </div>
        </footer>
    )
}
