export default function NAP() {
  return (
    <div className="space-y-1 text-[16px] leading-relaxed">
      <p className="font-bold text-[18px]">Clean May</p>

      <p>
        <strong>Address:</strong>  
        1234 Greenway Drive, Houston, TX 77002
      </p>

      <p>
        <strong>Phone:</strong>  
        <a href="tel:+18325550123" className="hover:underline">
          (832) 555-0123
        </a>
      </p>

      <p>
        <strong>Email:</strong>  
        <a href="mailto:support@cleanmay.com" className="hover:underline">
          support@cleanmay.com
        </a>
      </p>
    </div>
  );
}
