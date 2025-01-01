import Image from "next/image";
import React from "react";

export default function Post() {
  return (
    <article className="flex h-40 rounded-lg border-2 border-slate-300 p-6 shadow-md shadow-slate-700">
      <section className="flex h-full flex-col">
        <h1 className="font-bold">This is a sample story that I would make</h1>
        <p className="text-sm text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          tempora vitae perspiciatis repudiandae quo, fugit autem tempore, omnis
          mollitia ab similique. Nobis ab quo dolor inventore eligendi amet
          corporis nemo?
        </p>
        <p className="mt-auto text-xs text-slate-500">3d ago</p>
      </section>

      <Image
        src="https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="some image"
        width={300}
        height={300}
        className="rounded-md border shadow-lg"
      />
    </article>
  );
}
