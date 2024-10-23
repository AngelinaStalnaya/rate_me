export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* profile shared layout here */}
 
        {children}
      </section>
    )
  }