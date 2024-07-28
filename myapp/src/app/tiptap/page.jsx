'use client'
import { Button } from "@/components/ui/button"
import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import { useState } from 'react'
import Underline from '@tiptap/extension-underline'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'

import { Toggle } from "@/components/ui/toggle"

const Tiptap = () => {
    
    const [value,setValue]=useState("")
  const editor = useEditor({
    
    onUpdate({ editor }) {
        setValue(editor.getHTML());
      },
    extensions: [StarterKit,Underline,Superscript,Subscript,
        Heading.configure({
        levels: [1, 2,3],
      })],
    content: '',
   
  })

  if(!editor)
    return null
  return (
    <>
<div className='bg-slate-400 gap-2'>
<div className="gap-3">
        <Toggle
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          Strike
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : '{}'}
        >
          H3
        </Toggle>

        <Toggle
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          Code block
        </Toggle>
        <Toggle
          onClick={() => editor.chain().focus().toggleList().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Blockquote
        </Toggle>
        <Toggle
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            Toggle ordered list
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            Underline
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            Sub Script
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            SUper Script
          </Toggle>
          {/* <Toggle
            onClick={() => editor.chain().focus().toggleLink().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
           Link
          </Toggle> */}
      </div>
      </div>
    <div className='w-2/5 h-52 ml-10 border border-solid'>
    {/* <MenuBar editor={editor} /> */}
<EditorContent editor={editor}/>
    </div>
    <div className='mt-96 ml-96'>
        <p>{value}</p>
    </div>
    </>
  )
  // return 
}

export default Tiptap