export const metadata = {
  title: "",
};
export default function Page(props: PageProps<"/">) {
  return (
    <object
      title="next"
      data="/next.svg"
      width={200}
      height={48}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
    />
  );
}
