import Link from 'next/link';
import Image from 'next/image'
import buttonImage from '../../public/images/p2_button_sm.png';

export default function Navbar() {
    return (
        <Link
            href={process.env.GOOGLE_FORM_URL || ""}
        >
            <Image
                className="hover:brightness-125"
                src={buttonImage}
                width={48}
                height={48}
                alt="google form link"
                priority
            />
        </Link>
    );
}
