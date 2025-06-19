import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const AuthorInfo = ({
  name,
  role,
  avatar,
  bio,
  socialLinks,
  className
}) => {
  return (
    <div className={cn(
      "bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10",
      className
    )}>
      <div className="flex items-start gap-6">
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#b370f1] to-[#4ee1a0] opacity-50" />
          <img
            src={avatar}
            alt={name}
            className="relative w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {name}
          </h3>
          <p className="text-white/70 mb-3">
            {role}
          </p>
          <p className="text-white/60 text-sm mb-4">
            {bio}
          </p>

          {/* Social Links */}
          {socialLinks && (
            <div className="flex gap-4">
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 